class Review < ApplicationRecord
      enum relationship:  {peer: 0, self: 1}
      enum judgement: [:does_not_meet_expectation, :partially_meets, :fully_meets_expectations, :exceed_expectations ], _prefix: :judgement
      enum teamwork: [:does_not_meet_expectation, :partially_meets, :fully_meets_expectations, :exceed_expectations ], _prefix: :teamwork
      enum leadership: [:does_not_meet_expectation, :partially_meets, :fully_meets_expectations, :exceed_expectations ], _prefix: :leadership
      enum technical: [:does_not_meet_expectation, :partially_meets, :fully_meets_expectations, :exceed_expectations ], _prefix: :technical
end
