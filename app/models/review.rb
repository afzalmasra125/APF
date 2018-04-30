class Review < ApplicationRecord
      enum relationship:  {peer: 0, self: 1}
      enum judgement: [:does_not_meet_expectation, :partially_meets, :fully_meets_expectations, :exceed_expectations ], _prefix: :rating_1
      enum teamwork: [:does_not_meet_expectation, :partially_meets, :fully_meets_expectations, :exceed_expectations ], _prefix: :rating_2
      enum leadership: [:does_not_meet_expectation, :partially_meets, :fully_meets_expectations, :exceed_expectations ], _prefix: :rating_3
      enum technical: [:does_not_meet_expectation, :partially_meets, :fully_meets_expectations, :exceed_expectations ], _prefix: :rating_4
end
