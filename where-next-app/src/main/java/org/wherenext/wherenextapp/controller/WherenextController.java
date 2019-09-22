package org.wherenext.wherenextapp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.wherenext.wherenextapp.data.TextUtil;
import org.wherenext.wherenextapp.db.model.Opportunity;
import org.wherenext.wherenextapp.db.repository.OpportunityRepository;

import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping(path="/api")
public class WherenextController {

    @Autowired
    private OpportunityRepository opportunityRepository;

    @PostMapping(path="/new")
    public @ResponseBody String insertNewOpportunity(
            @RequestParam String title,
            @RequestParam String description,
            @RequestParam String organizer) {
        Opportunity opp = new Opportunity();
        opp.setTitle(title);
        opp.setCategoryDesc(description);
        opportunityRepository.save(opp);
        return "Saved";
    }

    @GetMapping(path="/demo")
    public @ResponseBody Iterable<Opportunity> getDemo() {
        List<Opportunity> l = new ArrayList<>();
        Opportunity o = new Opportunity();
        o.setTitle("WOW!");
        l.add(o);
        return l;
    }

    @GetMapping(path="/all", produces="application/json")
    public @ResponseBody Iterable<Opportunity> getOpportunities() {
        return opportunityRepository.findAll();
    }

    @GetMapping(path="/search")
    public @ResponseBody Iterable<Opportunity> searchOpportunities(String searchText) {
        if (searchText == null || searchText.isEmpty())
            return getOpportunities();

        List<String> keywords = TextUtil.extractKeywords(searchText);

        // hit flask api here
        List<Integer> documentIds = new ArrayList<>();
        documentIds.add(5137);

        return opportunityRepository.findAllById(documentIds);
    }
}
