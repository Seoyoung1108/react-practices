package vehicle.service;

import java.util.List;

import org.springframework.stereotype.Service;

import vehicle.domain.Vehicle;
import vehicle.repository.VehicleRepository;

@Service
public class VehicleService {
	private VehicleRepository vehicleRepository;
	
	public VehicleService(VehicleRepository vehicleRepository){
		this.vehicleRepository = vehicleRepository;
	}
	
	public List<Vehicle> getVehicles() {
		return vehicleRepository.findAll();
	}
	
	public Vehicle getVehicle(Long id) {
		return vehicleRepository.findById(id);
	}
	
	public void insertVehicle(Vehicle vehicle) {
		vehicleRepository.insert(vehicle);
		
	}

	public void updateVehicle(Vehicle vehicle) {
		vehicleRepository.update(vehicle);
	}
	

}
