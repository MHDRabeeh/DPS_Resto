import Container from '@/app/Components/Common/Container'
import UserOrders from './UserOrders'
// import { getCurrentUser } from '@/lib/s';
// import { User } from '@prisma/client';


export default async function UserOrderPage ()  {
//   const user = await getCurrentUser();
  return (
    <Container>
        <UserOrders   />
    </Container>
  )
}