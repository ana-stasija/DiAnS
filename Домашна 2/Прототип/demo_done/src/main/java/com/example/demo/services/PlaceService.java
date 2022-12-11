package com.example.demo.services;

import com.example.demo.models.Place;

import java.util.List;

public interface PlaceService {


    List<Place> getAllPlaces();

    List<Place> getAllByAmenity(String amenity);


}
