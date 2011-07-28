import java.io.*;

public class sumint
{
    public static void main(String args[])
    {
		try {
			BufferedReader in = new BufferedReader(new FileReader(args[0]));
			int total = 0;
			while (in.ready()) {
                total += Integer.parseInt(in.readLine());
            }
            System.out.println(total);
        }
        catch (IOException e) {
    		System.err.println("Error occurred opening input file:\n" + e);
		} catch (Exception e) {
			System.err.println("Unexpected error occurred:\n" + e);
		} finally {
			System.exit(0);
		}
    }
}