<%@ page import="java.util.*, Donor" %>
<html>
<head><title>Search Donor</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h2>Search Donors by Blood Group</h2>
    <form method="post">
        Enter Blood Group: <input type="text" name="bloodGroup">
        <input type="submit" value="Search">
    </form>

<%
    String bg = request.getParameter("bloodGroup");
    if (bg != null && !bg.isEmpty()) {
        List<Donor> donors = (List<Donor>) application.getAttribute("donors");
        boolean found = false;
%>
    <h3>Results:</h3>
    <table border="1">
        <tr><th>Name</th><th>Age</th><th>Contact</th><th>City</th></tr>
        <%
        if (donors != null) {
            for (Donor d : donors) {
                if (d.getBloodGroup().equalsIgnoreCase(bg)) {
                    found = true;
        %>
        <tr>
            <td><%= d.getName() %></td>
            <td><%= d.getAge() %></td>
            <td><%= d.getContact() %></td>
            <td><%= d.getCity() %></td>
        </tr>
        <%
                }
            }
        }
        if (!found) {
        %>
        <tr><td colspan="4">No donor found with blood group <%= bg %>.</td></tr>
        <%
        }
    }
%>
    </table>
</body>
</html>
