const Response = ({
  heading,
  answer,
  index,
}: {
  heading: string;
  answer: string;
  index: string;
}) => {
  return (
    <div className="pt-6">
      <h3 className="font-semibold text-primary">
        {index + 1}: {heading}:
      </h3>
      <p className="text-muted-foreground">{answer}</p>
    </div>
  );
};

export default Response;
