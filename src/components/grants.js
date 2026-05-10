import { useState } from "react";
import grantsData from "../dbs/grants.json";

function Grants() {
  const [statusFilter, setStatusFilter] = useState("All");

  const years = Object.keys(grantsData).sort((a, b) => b - a);

  const allGrants = years.flatMap((year) =>
    grantsData[year].map((grant) => ({ ...grant, year }))
  );

  const filteredGrants =
    statusFilter === "All"
      ? allGrants
      : allGrants.filter((grant) => grant.status === statusFilter);

  const awardedCount = allGrants.filter((g) => g.status === "Awarded").length;
  const underReviewCount = allGrants.filter((g) => g.status === "Under Review").length;
  const notFundedCount = allGrants.filter((g) => g.status === "Not Funded").length;

 const totalAwardedAmount = allGrants
  .filter((g) => g.status === "Awarded")
  .reduce((sum, g) => {
    const amountStr = g.amountAwarded;

    const amount = parseFloat(
      amountStr.replace("$", "").replace("K", "")
    );

    return sum + amount * 1000;
  }, 0);


  return (
    <div className="grants">
      <h2>Research Grants / Proposal Writing Experiences</h2>

      <div className="grant-summary">
        <p><strong>Total:</strong> {allGrants.length}</p>
        <p><strong>Awarded:</strong> {awardedCount}</p>
        <p><strong>Under Review:</strong> {underReviewCount}</p>
        <p><strong>Not Funded:</strong> {notFundedCount}</p>
        <p><strong>Total Awarded Amount:</strong> ${totalAwardedAmount.toLocaleString()}</p>
      </div>

      <label htmlFor="statusFilter">
        <strong>Filter by Status: </strong>
      </label>

      <select
        id="statusFilter"
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option value="All">All</option>
        <option value="Awarded">Awarded</option>
        <option value="Under Review">Under Review</option>
        <option value="Not Funded">Not Funded</option>
      </select>

      {years.map((year) => {
        const grantsForYear = grantsData[year].filter(
          (grant) => statusFilter === "All" || grant.status === statusFilter
        );

        if (grantsForYear.length === 0) return null;

        return (
          <section key={year}>
            <h3 className="year">{year}</h3>

            <ul>
              {grantsForYear.map((grant) => (
                <li key={grant.id}>
                  <strong>{grant.agency}</strong>
                  <br />
                  <em>{grant.title}</em>
                  <br />
                  Status: {grant.status}
                  <br />

                  {grant.amountAwarded && (
                    <>
                      Amount Awarded: {grant.amountAwarded}
                      <br />
                    </>
                  )}

                  {grant.amountRequested && (
                    <>
                      Amount Requested: {grant.amountRequested}
                      <br />
                    </>
                  )}

                  {grant.role && (
                    <>
                      Role: {grant.role}
                      <br />
                    </>
                  )}
                </li>
              ))}
            </ul>
          </section>
        );
      })}
    </div>
  );
}

export default Grants;