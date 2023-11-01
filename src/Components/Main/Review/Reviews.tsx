import { FeedbackData } from '@/Components/Shared/Consts';
import SectionWrapper from '../SectionWrapper';
import Review from './Review';

const Reviews = () => {
  return (
    <SectionWrapper id="reviews">
      <h3 className="text-3xl font-bold text-center mb-10 md:mb-20">
        {FeedbackData.heading}
      </h3>
      <div className="items-center flex flex-col md:flex-row justify-center gap-5">
        {FeedbackData.feedbacks.map((user, index) => (
          <Review key={index} index={index} user={user} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Reviews;
