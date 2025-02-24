package vehicle.controller.api;

import java.util.List;

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

import vehicle.domain.Vehicle;
import vehicle.dto.JsonResult;
import vehicle.service.VehicleService;

@RestController
@RequestMapping("/vehicle")
public class ApiController {
	private VehicleService vehicleService;

	public ApiController(VehicleService vehicleService) {
		this.vehicleService = vehicleService;
	}
	
	// 차량 전체 정보 출력
	@GetMapping("")
	public ResponseEntity<JsonResult<List<Vehicle>>> readVehicles(){
		
		return ResponseEntity
			.status(HttpStatus.OK)
			.body(JsonResult.success(vehicleService.getVehicles()));	
	}
	
	// 차량 개별 정보 출력
	@GetMapping("/{id}")
	public ResponseEntity<JsonResult<Vehicle>> readVehicle(@PathVariable Long id){
	
		return ResponseEntity
			.status(HttpStatus.OK)
			.body(JsonResult.success(vehicleService.getVehicle(id)));	
	}
	
	// 차량 등록
	@PostMapping("")
	public ResponseEntity<JsonResult<Vehicle>> createVehicle(@RequestBody Vehicle vehicle){		
		vehicle.setIsApproved("N");
		vehicleService.insertVehicle(vehicle);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(vehicle));
	}
	
	// 차량 관리자 승인 여부 갱신
	@PutMapping("/{id}/changeApproval")
	public ResponseEntity<JsonResult<Vehicle>> update(@PathVariable Long id, String isApproved){
		Vehicle vehicle = vehicleService.getVehicle(id);
		
		vehicle.setIsApproved(isApproved);
		vehicleService.updateVehicle(vehicle);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(vehicle));
	}
}
