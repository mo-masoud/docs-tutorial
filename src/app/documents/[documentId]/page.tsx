interface DocumentIDPageProps {
  params: Promise<{ documentId: string }>;
}

const DocumentIDPage = async ({ params }: DocumentIDPageProps) => {
  const { documentId } = await params;
  return (
    <div>
      <h1>Document ID: {documentId}</h1>
    </div>
  );
};

export default DocumentIDPage;
