package org.wherenext.wherenextapp.data;

import java.util.*;
import java.util.stream.Collectors;

public class TextUtil {

    private static Set<String> filter = new HashSet<>();

    static {
        String[] filteredWords = new String[] {
                "i",
                "want",
                "to",
                "volunteer",
                "for",
                "event",
                "events",
                "like",
                "love",
                "and",
                "a",
                "now",
                "help",
                "in",
                "this",
                "these",
                "those",
                "need",
                "we",
                "get",
                "involve",
                "involved",
                "i'd",
                "issue",
                "issues",
                "go",
                "interested"
        };
        Arrays.stream(filteredWords).forEach(w -> filter.add(w));
    }

    public static List<String> extractKeywords(String searchString) {

        String[] words = searchString.replaceAll("[^a-zA-Z ]", "").toLowerCase().split("\\s+");

        List<String> result = Arrays
                .stream(words)
                .filter(w -> {
                    return !filter.contains(w);
                })
                .collect(Collectors.toList());

        return result;
    }
}
