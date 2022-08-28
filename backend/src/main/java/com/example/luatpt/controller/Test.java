package com.example.luatpt.controller;

import java.util.*;

public class Test {
    private static void addPi(ArrayList<? super Double> list){
        list.add(Math.PI);
    }
    public static void main(String[] args){
        Collection<String> collection = new LinkedList<>();
        collection.add("foo");
        collection.add("bar");
        collection.add("baz");
        collection.forEach(System.out::println);
    }
}
