package kanbanboard.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class Vehicle {
	private Long id;
	private String number;
	private String inDatetime;
	private String outDatetime;
	private String driverName;
	private String driverBirth;
	private String driverPhone;
	private String isApproved;
	private String staffName;
	private String staffFrom;
	private String staffPhone;
}
