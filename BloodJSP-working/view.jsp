<%@ page import="java.util.*, Donor" %>
<html>
<head><title>View Donors</title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <h2>All Registered Donors</h2>
    <table border="1">
        <tr><th>Name</th><th>Age</th><th>Blood Group</th><th>Contact</th><th>City</th></tr>
        <%
            List<Donor> donors = (List<Donor>) application.getAttribute("donors");
            if (donors != null && !donors.isEmpty()) {
                for (Donor d : donors) {
        %>
        <tr>
            <td><%= d.getName() %></td>
            <td><%= d.getAge() %></td>
            <td><%= d.getBloodGroup() %></td>
            <td><%= d.getContact() %></td>
            <td><%= d.getCity() %></td>
        </tr>
        <%
                }
            } else {
        %>
        <tr><td colspan="5">No donors registered yet.</td></tr>
        <%
            }
        %>
    </table>
</body>
</html>
