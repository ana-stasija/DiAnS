import java.io.File;
import java.io.FileNotFoundException;
import java.util.*;

public class MainClass {

    public static void main(String[] args) throws FileNotFoundException {

        String string;
        ClassLoader loader = MainClass.class.getClassLoader();
        Scanner scanner = new Scanner(new File("C:\\Users\\Филип\\Desktop\\DomasnaDIANS\\src\\main\\resources\\hospitals.csv"));

        Pipe<String> pipeHospitals = new Pipe<String>();

        LatLonFilter latLonFilter = new LatLonFilter();
        LatLongNameAmenityFilter latLongNameAmenityFilter = new LatLongNameAmenityFilter();

        pipeHospitals.addFilter(latLonFilter);
        pipeHospitals.addFilter(latLongNameAmenityFilter);
        ArrayList<String> hospitals= new ArrayList<>();

        while(scanner.hasNextLine()){
            string=pipeHospitals.runFilters(scanner.nextLine());
            if(!Objects.equals(string, ""))

                hospitals.add(string);
        }
        scanner = new Scanner(new File("C:\\Users\\Филип\\Desktop\\DomasnaDIANS\\src\\main\\resources\\cafes.csv"));

        Pipe<String> pipeCafes = new Pipe<String>();
        ArrayList<String> cafes = new ArrayList<>();
        CafeFilter cafeFilter = new CafeFilter();
        pipeCafes.addFilter(latLonFilter);
        pipeCafes.addFilter(cafeFilter);
        while(scanner.hasNextLine()){
            string=pipeCafes.runFilters(scanner.nextLine());
            if(!Objects.equals(string, ""))

                cafes.add(string);
        }
        scanner = new Scanner(new File("C:\\Users\\Филип\\Desktop\\DomasnaDIANS\\src\\main\\resources\\supermarkets.csv"));
        Pipe<String> pipeSupermarkets = new Pipe<String>();

        ArrayList<String> supermarkets=new ArrayList<>();
        pipeSupermarkets.addFilter(latLongNameAmenityFilter);
        while(scanner.hasNextLine()){
            string=pipeSupermarkets.runFilters(scanner.nextLine());
            if(!Objects.equals(string, ""))

                supermarkets.add(string);
        }

        scanner = new Scanner(new File("C:\\Users\\Филип\\Desktop\\DomasnaDIANS\\src\\main\\resources\\fakulteti.csv"));
        Pipe<String> pipeUni = new Pipe<String>();

        ArrayList<String> universities=new ArrayList<>();
        pipeUni.addFilter(latLonFilter);
        pipeUni.addFilter(latLongNameAmenityFilter);
        while(scanner.hasNextLine()){
            string=pipeUni.runFilters(scanner.nextLine());
            if(!Objects.equals(string, ""))

                universities.add(string);
        }
        scanner = new Scanner(new File("C:\\Users\\Филип\\Desktop\\DomasnaDIANS\\src\\main\\resources\\malls.csv"));
        Pipe<String> pipeMalls = new Pipe<String>();

        ArrayList<String> malls=new ArrayList<>();
        pipeMalls.addFilter(latLonFilter);
        pipeMalls.addFilter(latLongNameAmenityFilter);
        while(scanner.hasNextLine()){
            string=pipeMalls.runFilters(scanner.nextLine());
            if(!Objects.equals(string, ""))

                malls.add(string);
        }

        scanner = new Scanner(new File("C:\\Users\\Филип\\Desktop\\DomasnaDIANS\\src\\main\\resources\\park.csv"));

        Pipe<String> pipeParks = new Pipe<String>();
        ArrayList<String> parks = new ArrayList<>();

        pipeParks.addFilter(latLonFilter);
        pipeParks.addFilter(latLongNameAmenityFilter);
        while(scanner.hasNextLine()){
            string=pipeParks.runFilters(scanner.nextLine());
            if(!Objects.equals(string, ""))

                parks.add(string);
        }

        scanner = new Scanner(new File("C:\\Users\\Филип\\Desktop\\DomasnaDIANS\\src\\main\\resources\\restaurant.csv"));

        Pipe<String> pipeRestaurants = new Pipe<String>();
        ArrayList<String> restaurants = new ArrayList<>();

        pipeRestaurants.addFilter(latLonFilter);
        pipeRestaurants.addFilter(latLongNameAmenityFilter);
        while(scanner.hasNextLine()){
            string=pipeRestaurants.runFilters(scanner.nextLine());
            if(!Objects.equals(string, ""))

               restaurants.add(string);
        }
    }
}