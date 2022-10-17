package co.edu.escuelaing.aygo;

import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;

@Data
@Document
public class Phrase {
    @Id
    private String id;
    private String log;
    private LocalDateTime created;

    public Phrase(String log, LocalDateTime created) {
        this.log = log;
        this.created = created;
    }
}
