import RequestTable from "@/components/requestTable";
import Table2 from "@/components/requestTable2";
import View from "@/components/ViewRequests/view";
import { findUser } from "@/db/find";
// import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { useRouter } from "next/navigation";

type Params = {
  status: "accepted" | "rejected" | "pending";
};

export default async function Request({
  params: { status },
}: {
  params: Params;
}) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user || !user.email) {
    return <h1>No user</h1>;
  }

  const currentUser = await findUser(user.email);

  let currentTickets: PayTicket[] = [];

  if (currentUser) {
    currentUser.payTickets.forEach((ticket) => {
      if (ticket.status == status) {
        currentTickets.push(ticket);
      }
    });
  }

  return currentUser ? (
    <>
      <RequestTable currentTickets={currentTickets} status={status} />
      {/* <Table2 /> */}
      {/* <View /> */}
    </>
  ) : (
    <h1>User not found in database</h1>
  );
}
