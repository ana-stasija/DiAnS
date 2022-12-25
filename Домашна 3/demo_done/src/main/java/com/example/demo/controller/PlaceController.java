package com.example.demo.controller;

import com.example.demo.models.Place;
import com.example.demo.services.PlaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/books")
@Validated
@CrossOrigin(origins="*")
public class PlaceController {

    private final PlaceService placeService;

    @Autowired
    public PlaceController(PlaceService placeService) {
        this.placeService = placeService;
    }

    @GetMapping(value = "/all")
    public ResponseEntity<List<Place>> getAllBooks() {
        List<Place> places = placeService.getAllPlaces();
        return new ResponseEntity<>(places, HttpStatus.OK);
    }
    @GetMapping(value = "/{name}")
     public ResponseEntity<List<Place>> getAllByAmenity(@PathVariable String name){
       List<Place> place = placeService.getAllByAmenity(name);
        return new ResponseEntity<>(place, HttpStatus.OK);
    }





}
