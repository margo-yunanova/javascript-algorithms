select number,
  case
    when number % 2 = 0 then 'Even'
    else 'Odd'
  end is_even
from numbers