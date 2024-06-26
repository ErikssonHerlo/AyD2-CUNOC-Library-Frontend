import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';
import BookTable from '../../components/Tables/BookTable';
import DefaultLayout from '../../layout/DefaultLayout';

const Books = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Libreria" />
      <div className="flex flex-col gap-10">
        <BookTable
          endpoint="http://18.226.172.184:8080/api/v1/book"
          module="book-creation"
          urlKey="isbn_code"
        />
      </div>
    </DefaultLayout>
  );
};

export default Books;
