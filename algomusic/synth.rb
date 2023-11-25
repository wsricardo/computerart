load_sample :bd_fat
use_synth :tb303

4.times do
  play [:A, :A].tick, amp: 0.8
  sleep 0.2
end
