import java.util.Objects;

public class LatLongNameAmenityFilter implements Filter<String>{
    public String execute(String input) {
        if(Objects.equals(input, "")){
            return input;
        }

        String[] fields = input.split(",");
        String res="";
        if(fields.length<=5){
            return "";
        }
//        if(fields.length==7|| Objects.equals(fields[8], "")){
//            return "";
//        }
        if(Objects.equals(fields[4], "hospital")) {
            res += fields[0] + "," + fields[1] + "," + fields[4] + "," + fields[6] + ",";
        }
        else if(fields.length>=8&&Objects.equals(fields[6], "hospital")&& !Objects.equals(fields[8], "")){
            res += fields[0] + "," + fields[1] + "," + fields[6] + "," + fields[8] + ",";
        }
        else if(fields.length>=9&&Objects.equals(fields[8], "supermarket")&& !Objects.equals(fields[5], "")){

            res += fields[0] + "," + fields[1] + "," + fields[8] + "," + fields[5] + ",";
        }

        else if(fields.length>11&&Objects.equals(fields[8], "university")&& !Objects.equals(fields[11], "")){

            res += fields[0] + "," + fields[1] + "," + fields[8] + "," + fields[11] + ",";
        }
        else if(fields.length>=16&&Objects.equals(fields[15], "mall")&& !Objects.equals(fields[11], "")){

            res += fields[0] + "," + fields[1] + "," + fields[15] + "," + fields[11] + ",";
        }
        else if(fields.length>=7&&Objects.equals(fields[5], "park")&& !Objects.equals(fields[6], "")){

            res += fields[0] + "," + fields[1] + "," + fields[5] + "," + fields[6] + ",";
        }
        else if(fields.length>=15&&Objects.equals(fields[11], "restaurant")&& !Objects.equals(fields[14], "")){

            res += fields[0] + "," + fields[1] + "," + fields[11] + "," + fields[14] + ",";
        }
        else if(fields.length>=13&&Objects.equals(fields[9], "restaurant")&& !Objects.equals(fields[12], "")){

            res += fields[0] + "," + fields[1] + "," + fields[9] + "," + fields[12] + ",";
        }
        return res;
    }
}
