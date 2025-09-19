import "./showCard.css"

function ShowCard({ clickItem }) {
  if (!clickItem) return <>
  <p>Select a user to see details</p>
  <h5>Empty!</h5>
  </>;

  return (
    <div className="show-card">
      <h2>User Details</h2>
      <p><strong>Name:</strong> {clickItem.name}</p>
      <p><strong>ID:</strong> {clickItem.id}</p>
      <p><strong>Username:</strong> {clickItem.username}</p>
      <p><strong>Email:</strong> {clickItem.email}</p>
      <p><strong>Phone:</strong> {clickItem.phone}</p>
      <p><strong>Website:</strong> {clickItem.website}</p>
      <p><strong>Company:</strong> {clickItem.company?.name}</p>
      <p><strong>Address:</strong> {clickItem.address?.city}, {clickItem.address?.street}</p>
    </div>
  );
}


export default ShowCard;