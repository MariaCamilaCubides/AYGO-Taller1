package co.edu.escuelaing.aygo;

import lombok.AllArgsConstructor;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/v1/phrases")
@AllArgsConstructor
public class PhraseController {

    @Autowired
    PhraseService phraseService;

    @GetMapping
    public List<Phrase> fetchAllPhrases() {
        return phraseService.getAllPhrases();
    }

    @PostMapping
    public Phrase savePhrase(@RequestBody String log) {
        JSONObject jsonObject = new JSONObject(log);
        Phrase finalPhrase = new Phrase(
                jsonObject.getString("body"),
                LocalDateTime.now()
        );
        return phraseService.createPhrase(finalPhrase);
    }
}
