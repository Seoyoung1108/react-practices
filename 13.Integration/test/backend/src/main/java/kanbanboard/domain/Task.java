package kanbanboard.domain;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Setter
@Getter
@ToString
public class Task {
	private Long no;
	private String name;
	private String done;
	private Long cardNo;
	
	public Task(Long no) {
		this.no=no;
	}
 @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Task task = (Task) o;
        return no != null && no.equals(task.no);  // id만 비교
    }

    @Override
    public int hashCode() {
        return 31 + (no != null ? no.hashCode() : 0);  // id로만 hashCode 계산
	    }
}
