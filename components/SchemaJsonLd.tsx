interface Props {
  data: object | object[];
  id?: string;
}

export default function SchemaJsonLd({ data, id }: Props) {
  const json = JSON.stringify(Array.isArray(data) ? data : [data]);
  return (
    <script
      type="application/ld+json"
      id={id}
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
