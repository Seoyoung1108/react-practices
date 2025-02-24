package kanbanboard.repository;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.stereotype.Repository;

import kanbanboard.domain.Card;
import kanbanboard.domain.Vehicle;

@Repository
public class VehicleRepository {
	private final SqlSession sqlSession;
	
	public VehicleRepository(SqlSession sqlSession) {
		this.sqlSession = sqlSession;
	}
	
	public List<Vehicle> findAll() {
		return sqlSession.selectList("vehicle.findAll");
	}
	
	public Vehicle findById(Long id) {
		return sqlSession.selectOne("vehicle.findById", id);
	}

	public int insert(Vehicle vehicle) {
		return sqlSession.insert("vehicle.insert", vehicle);
		
	}

	public int update(Vehicle vehicle) {
		return sqlSession.update("vehicle.update", vehicle);
	}

	
}
