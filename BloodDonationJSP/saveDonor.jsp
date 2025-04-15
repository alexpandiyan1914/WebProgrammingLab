<%@ page import="java.sql.*" %>
<%
    String name = request.getParameter("name");
    String blood = request.getParameter("blood_group");
    String phone = request.getParameter("phone");

    try {
        Class.forName("com.mysql.cj.jdbc.Driver");
        Connection con = DriverManager.getConnection("jdbc:mysql://localhost:3306/blood_db", "root", "");
        PreparedStatement ps = con.prepareStatement("INSERT INTO donor (name, blood_group, phone) VALUES (?, ?, ?)");
        ps.setString(1, name);
        ps.setString(2, blood);
        ps.setString(3, phone);
        ps.executeUpdate();
        con.close();
%>
    <h3>Donor Registered Successfully!</h3>
    <a href="viewDonors.jsp">View All Donors</a> | <a href="register.jsp">Register Another</a>
<%
    } catch (Exception e) {
        out.println("Error: " + e);
    }
%>
