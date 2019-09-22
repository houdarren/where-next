package org.wherenext.wherenextapp.data;

import java.util.*;
import java.util.stream.Collectors;

public class TextUtil {

    private static Set<String> filter = new HashSet<>();

    static {
        String[] filteredWords = new String[] {
                "volunteer"
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
