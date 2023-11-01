type Props = {
  doc: {
    img: string;
    name: string;
    job: string;
  };
};

const Doctor = ({ doc }: Props) => {
  return (
    <div>
      <div className="bg-[#9ae7ff] p-3 pb-0 rounded-tl-[100px] rounded-br-[100px] lg:rounded-tl-[130px] lg:rounded-br-[120px] overflow-hidden">
        <img className="min-w-[180px]" src={doc.img} alt={doc.name} />
      </div>
      <div className="pb-5 pt-3">
        <h5 className="font-bold">{doc.name}</h5>
        <p className="text-sm">{doc.job}</p>
      </div>
    </div>
  );
};

export default Doctor;
