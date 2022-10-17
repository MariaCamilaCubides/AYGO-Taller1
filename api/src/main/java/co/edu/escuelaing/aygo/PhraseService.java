package co.edu.escuelaing.aygo;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class PhraseService {

    private final PhraseRepository phraseRepository;

    public Phrase createPhrase(Phrase phrase) {
        return phraseRepository.insert(phrase);
    }
    public List<Phrase> getAllPhrases() {
        return phraseRepository.findPhraseByCreated();
    }
}