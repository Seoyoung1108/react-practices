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
		System.out.println(sqlSession.selectList("vehicle.findAll"));
		return sqlSession.selectList("vehicle.findAll");
	}
}
