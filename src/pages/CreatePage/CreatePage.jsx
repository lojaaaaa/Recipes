import CreateForm from '../../components/CreateForm/CreateForm'
const CreatePage = () => {


  return (
    <>
      <section className="create">
        <div className="create__container container">
          <h2 className="create__title title">Create</h2>
          <div className="create__line line--green"></div>
          <CreateForm />
        </div>
      </section>
  </>
  )
}

export default CreatePage