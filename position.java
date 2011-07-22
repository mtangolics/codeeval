import java.io.*;

public class position
{
    public static void main(String args[])
	{
		try {
			BufferedReader in = new BufferedReader(new FileReader(args[0]));
			String[] tokens;
			String output;
			while (in.ready()) {
				tokens = in.readLine().split(",");
				if(tokens.length == 3)
				{
					String bitString = Integer.toBinaryString(Integer.parseInt(tokens[0]));
					int p1 = Integer.parseInt(tokens[1]);
					int p2 = Integer.parseInt(tokens[2]);

					if(bitString.charAt(bitString.length()-p1) == bitString.charAt(bitString.length()-p2))
					{
						System.out.println("true");
					}
					else
					{
						System.out.println("false");
					}
				}
			}
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