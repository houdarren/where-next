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
            @RequestParam String description) {
        Opportunity opp = new Opportunity();
        opp.setTitle(title);
        opp.setCategoryDesc(description);
        opportunityRepository.save(opp);
        return "Saved";
    }

    @GetMapping(path="/all")
    public @ResponseBody Iterable<Opportunity> getOpportunities() {
        return opportunityRepository.findAll();
    }

    @GetMapping(path="/search")
    public @ResponseBody Iterable<Opportunity> searchOpportunities(String searchText) {
        if (searchText == null || searchText.isEmpty())
            return getOpportunities();

        List<String> keywords = TextUtil.extractKeywords(searchText);


    }
}
