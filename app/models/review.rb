class Review < ApplicationRecord
      enum :relationship : {:peer 0, :self 1}
      enum :judgement : {:DoesNotMeetExpectation 0 :PartiallyMeets 1, FullyMeetsExpectations: 2 , :ExceedsExpectations 3}
      enum :teamwork : {:DoesNotMeetExpectation 0 :PartiallyMeets 1, FullyMeetsExpectations: 2 , :ExceedsExpectations 3}
      enum :leadership : {:DoesNotMeetExpectation 0 :PartiallyMeets 1, FullyMeetsExpectations: 2 , :ExceedsExpectations 3}
      enum :technical : {:DoesNotMeetExpectation 0 :PartiallyMeets 1, FullyMeetsExpectations: 2 , :ExceedsExpectations 3}
end
