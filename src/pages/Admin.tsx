import AdminForm from '../components/layouts/adminLayout/AdminForm'

function Admin() {
  return (
    <section className='h-screen relative flex flex-col items-center justify-center' >
      <div className='absolute inset-0 bg-blue-900/40'>
         <div className="container mx-auto my-auto h-full flex items-center justify-center">
           <div className="admin mx-auto">
             <AdminForm />
           </div>
         </div>
      </div>
    </section>
  )
}

export default Admin