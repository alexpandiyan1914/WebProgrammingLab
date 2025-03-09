<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $action = $_POST['action'];

    if ($action == "summary") {
        echo "<h3>Account Summary</h3>";
        echo "Account Holder: John Doe<br>";
        echo "Account Balance: $5000<br>";
        echo "Account Type: Savings";
    }
    
    if ($action == "transactions") {
        echo "<h3>Transaction History</h3>";
        echo "<ul>
                <li>01-Mar-2024: -$100 (Grocery Shopping)</li>
                <li>25-Feb-2024: +$200 (Salary Deposit)</li>
                <li>15-Feb-2024: -$50 (Online Purchase)</li>
              </ul>";
    }
    
    if ($action == "transfer") {
        $amount = $_POST['amount'];
        echo "<h3>Fund Transfer</h3>";
        echo "Successfully Transferred $$amount to XYZ Account!";
    }
}
?>
