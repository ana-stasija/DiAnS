import java.util.Arrays;
import java.util.Objects;

public class LatLonFilter implements Filter<String>{
    public String execute(String input) {

        String[] fields = input.split("\"");
        String[] coordinates;
        String res = "";
        float coordinateLat=0, coordinateLong=0;
        if(fields.length==3){
            coordinates = fields[1].split(",");
//            System.out.println(Arrays.toString(coordinates));
//            System.out.println(fields[5]);
//            coordinates= fields[4].split(",");
//            System.out.println(Arrays.toString(coordinates));
            for(int i=0;i<coordinates.length-1;i++){
                coordinateLat+=Float.parseFloat(coordinates[i++]); // 20,40,20,30,10,40
                coordinateLong+=Float.parseFloat(coordinates[i]);
            }

            coordinateLat= (float) (coordinateLat/coordinates.length*2);
            coordinateLong=(float) (coordinateLong/coordinates.length*2);

            String[] part1=fields[0].split(",");
            part1[0]=Float.toString(coordinateLat);
            part1[1]=Float.toString(coordinateLong);

            res+=part1[1]+","+part1[0]+",";
            String[] part2=fields[2].split(",");
            for(int i=0;i<part2.length;i++){
                res+=part2[i]+",";
            }

//            System.out.println(fields[2]);
//            System.out.println(part2[2]+","+part2[4]);
//            System.out.println(Arrays.toString(part2));
//            System.out.println(part2.length);
//            if(part2.length<5) return "";
//            else {
//                res += part2[2] + "," + part2[4] + ",";
//            }
            return res;
        }
        else{
            return input;
        }
//        System.out.println(res);

    }
}
