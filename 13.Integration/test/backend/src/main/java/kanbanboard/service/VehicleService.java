package kanbanboard.service;

import java.util.List;

import org.springframework.stereotype.Service;

import kanbanboard.domain.Vehicle;
import kanbanboard.repository.VehicleRepository;

@Service
public class VehicleService {
	private VehicleRepository vehicleRepository;
	
	public VehicleService(VehicleRepository vehicleRepository){
		this.vehicleRepository = vehicleRepository;
	}
	public List<Vehicle> getVehicles() {
		// TODO Auto-generated method stub
		return vehicleRepository.findAll();
	}

}
