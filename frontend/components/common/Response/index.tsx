const Response = ({
  heading,
  response,
  index,
}: {
  heading: string;
  response: string;
  index: string;
}) => {
  return (
    <div className="pt-6">
      <h3 className="font-semibold text-primary">
        {index + 1}: {heading}:
      </h3>
      <p className="text-muted-foreground">{response}</p>
    </div>
  );
};

export default Response;
