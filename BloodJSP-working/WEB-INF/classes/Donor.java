// File: Donor.java
public class Donor {
    private String name;
    private int age;
    private String bloodGroup;
    private String contact;
    private String city;

    // Constructor
    public Donor(String name, int age, String bloodGroup, String contact, String city) {
        this.name = name;
        this.age = age;
        this.bloodGroup = bloodGroup;
        this.contact = contact;
        this.city = city;
    }

    // Getters
    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public String getBloodGroup() {
        return bloodGroup;
    }

    public String getContact() {
        return contact;
    }

    public String getCity() {
        return city;
    }

    // Setters (if needed)
    public void setName(String name) {
        this.name = name;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void setBloodGroup(String bloodGroup) {
        this.bloodGroup = bloodGroup;
    }

    public void setContact(String contact) {
        this.contact = contact;
    }

    public void setCity(String city) {
        this.city = city;
    }
}
