package org.wherenext.wherenextapp.data;

import java.util.*;

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
                "love"
        };
        Arrays.stream(filteredWords).forEach(w -> filter.add(w));
    }

    public static List<String> extractKeywords(String searchString) {

        String[] words = searchString.replaceAll("[^a-zA-Z ]", "").toLowerCase().split("\\s+");

        List<String> result = new ArrayList<>();

        Arrays.stream(words).forEach(w -> {
            if (!filter.contains(w))
                result.add(w);
        });

        return result;
    }
}
