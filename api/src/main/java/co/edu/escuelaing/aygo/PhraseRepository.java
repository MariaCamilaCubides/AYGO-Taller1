package co.edu.escuelaing.aygo;

import java.util.List;
import java.util.UUID;

import org.springframework.data.mongodb.repository.Aggregation;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface PhraseRepository extends MongoRepository<Phrase, UUID> {

    @Aggregation(pipeline = {
            "{ '$sort' : { 'created' : -1 } }",
            "{ '$limit' : 10 }"
    })
    List<Phrase> findPhraseByCreated();

}
