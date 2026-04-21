export default function BudgetForm() {
  return (
    <div style={{ padding: "40px", maxWidth: "800px", margin: "0 auto" }}>
      <h1>Budget Intake Form</h1>

      <form action="https://formspree.io/f/mnjlbdjn" method="POST">

        <h2>Client Information</h2>

        <input name="client_name" placeholder="Full Name" required /><br/><br/>
        <input name="client_email" type="email" placeholder="Email" required /><br/><br/>
        <input name="client_phone" placeholder="Phone" /><br/><br/>

        <h2>Income</h2>

        <input name="monthly_income" type="number" placeholder="Monthly Income" /><br/><br/>

        <p>Pay Frequency</p>

        <label><input type="radio" name="pay_frequency" value="Weekly" /> Weekly</label><br/>
        <label><input type="radio" name="pay_frequency" value="Bi-Weekly" /> Bi-Weekly</label><br/>
        <label><input type="radio" name="pay_frequency" value="Semi-Monthly" /> Semi-Monthly</label><br/>
        <label><input type="radio" name="pay_frequency" value="Monthly" /> Monthly</label><br/><br/>

        <h3>Pay Dates</h3>

        <input type="date" name="pay_date_1" /><br/><br/>
        <input type="date" name="pay_date_2" /><br/><br/>
        <input type="date" name="pay_date_3" /><br/><br/>
        <input type="date" name="pay_date_4" /><br/><br/>

        <h2>Required Bills</h2>

        <p>Housing</p>
        <input name="housing_amount" type="number" placeholder="Amount" />
        <input name="housing_due" type="date" /><br/><br/>

        <p>Utilities</p>
        <input name="utilities_amount" type="number" placeholder="Amount" />
        <input name="utilities_due" type="date" /><br/><br/>

        <p>Phone / Internet</p>
        <input name="phone_amount" type="number" placeholder="Amount" />
        <input name="phone_due" type="date" /><br/><br/>

        <p>Transportation</p>
        <input name="transportation_amount" type="number" placeholder="Amount" />
        <input name="transportation_due" type="date" /><br/><br/>

        <p>Debt Payments</p>
        <input name="debt_amount" type="number" placeholder="Amount" />
        <input name="debt_due" type="date" /><br/><br/>

        <p>Childcare</p>
        <input name="childcare_amount" type="number" placeholder="Amount" />
        <input name="childcare_due" type="date" /><br/><br/>

        <p>Medical</p>
        <input name="medical_amount" type="number" placeholder="Amount" />
        <input name="medical_due" type="date" /><br/><br/>

        <p>Savings</p>
        <input name="savings_amount" type="number" placeholder="Amount" />
        <input name="savings_due" type="date" /><br/><br/>

        <p>Other</p>
        <input name="other_amount" type="number" placeholder="Amount" />
        <input name="other_due" type="date" /><br/><br/>

        <h2>Notes</h2>
        <textarea name="notes" /><br/><br/>

        <h2>Goals</h2>
        <textarea name="goals" /><br/><br/>

        <input type="hidden" name="_subject" value="New Budget Intake Form Submission" />

        <button type="submit">Submit</button>

      </form>
    </div>
  );
}