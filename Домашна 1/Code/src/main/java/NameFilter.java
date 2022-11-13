import java.util.Objects;
//
//public class NameFilter implements Filter<String>{
//
//    public String execute(String input) {
//        System.out.println(input);
//        String[] fields = input.split(",");
//        if(fields.length<=7||Objects.equals(fields[8], "")){
//            return "";
//        }
//        String res = "";
//        for (String field : fields){
//            res += field + ",";
//        }
//        System.out.println(res);
//        return res;
//    }
//}
