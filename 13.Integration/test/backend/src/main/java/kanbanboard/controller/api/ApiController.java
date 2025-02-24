package kanbanboard.controller.api;

import kanbanboard.repository.CardRepository;
import kanbanboard.repository.TaskRepository;
import kanbanboard.service.VehicleService;

import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import kanbanboard.domain.Card;
import kanbanboard.domain.Task;
import kanbanboard.domain.Vehicle;
import kanbanboard.dto.JsonResult;

@RestController
@RequestMapping("/vehicle")
public class ApiController {
	private VehicleService vehicleService;

	private final CardRepository cardRepository;
	private final TaskRepository taskRepository;

	public ApiController(CardRepository cardRepository, TaskRepository taskRepository,VehicleService vehicleService) {
		this.cardRepository = cardRepository;
		this.taskRepository = taskRepository;
		this.vehicleService = vehicleService;
	}
	
	@GetMapping("/get")
	public ResponseEntity<JsonResult<List<Vehicle>>> readVehicles(){
		
		return ResponseEntity
			.status(HttpStatus.OK)
			.body(JsonResult.success(vehicleService.getVehicles()));
		
	}

	@GetMapping("/card")
	public ResponseEntity<JsonResult<List<Card>>> readCard(){
		
		return ResponseEntity
			.status(HttpStatus.OK)
			.body(JsonResult.success(cardRepository.findAll()));
		
	}
	
	@GetMapping("/task")
	public ResponseEntity<JsonResult<List<Task>>> readTask(Long cardno){
		
		return ResponseEntity
			.status(HttpStatus.OK)
			.body(JsonResult.success(taskRepository.findAllByCardNo(cardno)));
		
	}
	
	@PostMapping("/task")
	public ResponseEntity<JsonResult<Task>> create(@RequestBody Task task){		
		List<Task> tasks = taskRepository.findAllByCardNo(task.getCardNo());
		
		Long maxId = Optional
			.ofNullable(tasks.isEmpty()? null: tasks.getFirst())
			.map(t -> t.getNo())
			.orElse(0L);
		// Empty일 수 있으므로
		
		task.setNo(maxId+1);
		tasks.addFirst(task);
		taskRepository.insert(task);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(task));
	}
	
	
	@DeleteMapping("/task/{id}")
	public ResponseEntity<JsonResult<Long>> delete(@PathVariable Long id){	
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success((taskRepository.delete(id)) ? id : -1));
	}
	
	@PutMapping("/task/{id}")
	public ResponseEntity<JsonResult<Task>> update(@PathVariable Long id, Integer isDone, Long cardno){
		List<Task> tasks = taskRepository.findAllByCardNo(cardno);
		int index = tasks.indexOf(new Task(id));
		
		Optional<Task> optionalItem = Optional.ofNullable(index==-1? null : tasks.get(index)); // id에 해당하는 객체가 없을 경우 대비
		optionalItem.ifPresent((Task t) -> {
			if(isDone==1) {
				t.setDone("Y");
				taskRepository.updateDone(id, "Y");
			} else {
				t.setDone("N");
				taskRepository.updateDone(id, "N");
			};
		});
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(optionalItem.orElse(null)));
	}
}
