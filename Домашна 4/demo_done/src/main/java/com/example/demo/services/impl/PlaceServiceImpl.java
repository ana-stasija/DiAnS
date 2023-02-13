package com.example.demo.services.impl;

import com.example.demo.models.Place;
import com.example.demo.repository.PlaceRepository;
import com.example.demo.services.PlaceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class PlaceServiceImpl implements PlaceService {

    private final PlaceRepository placeRepository;

    @Autowired
    public PlaceServiceImpl(PlaceRepository placeRepository) {
        this.placeRepository = placeRepository;
    }



    @Override
    public List<Place> getAllPlaces() {
        return placeRepository.findAll();
    }

    @Override
    public List<Place> getAllByAmenity(String amenity) {
        List<Place> rez=new ArrayList<Place>();
        List<Place> list = placeRepository.findAll();
        for ( Place place : list ){
            if(place.getAmenity().equals(amenity)){
                rez.add(place);
            }
        }

        return rez;
    }









}
