import { paragraphSchema } from "@/schemas";

const ReferenceParagraphs = ({ crypto }) => {
  return paragraphSchema.map((p, idx) => (
    <p key={idx}>{p.paragraph(crypto)}</p>
  ));
};

export default ReferenceParagraphs;
