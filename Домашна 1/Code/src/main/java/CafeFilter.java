import java.util.Objects;

public class CafeFilter implements Filter<String>{
    public String execute(String input) {
        String [] fields = input.split(",");
        String res="";

        if(fields.length>=12&& Objects.equals(fields[9], "cafe") && !Objects.equals(fields[11], "")){
            res+=fields[0]+","+fields[1]+","+fields[9]+","+fields[11]+",";

        }
        if(fields.length>=15&& Objects.equals(fields[12], "cafe") && !Objects.equals(fields[14], "")){
            res+=fields[0]+","+fields[1]+","+fields[12]+","+fields[14]+",";

        }
        return res;
    }
}
