<%@ page import="Donor" %>
<%
    String name = request.getParameter("name");
    int age = Integer.parseInt(request.getParameter("age"));
    String blood = request.getParameter("bloodGroup");
    String contact = request.getParameter("contact");
    String city = request.getParameter("city");

    Donor donor = new Donor(name, age, blood, contact, city);

    session.setAttribute("donor", donor);
%>

<h2>Registration Successful!</h2>
<p>Thank you, <%= donor.getName() %>!</p>
